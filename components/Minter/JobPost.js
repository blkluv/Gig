/* eslint-disable no-use-before-define */

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import Waste from "../../utils/Waste.json";
import { wastemarketplaceAddress } from "../../config";

import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  SimpleGrid,
  HStack,
  VStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import ReactReadMoreReadLess from "react-read-more-read-less";

export default function JobPost() {
  const HeaderTextColor = useColorModeValue("black", "#00A4BD");

  //  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadWaste();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    return ipfsGateWayURL;
  };

  async function loadWaste() {
    /* create a generic provider and query for Wastes */
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mainnet.infura.io/v3/db9967a36a584cd0ac3a04e62a41e263"
    );
    const contract = new ethers.Contract(
      wastemarketplaceAddress,
      Waste.abi,
      provider
    );
    const data = await contract.fetchMarketItems();
    // console.log("Waste data fetched from contract", data);
    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    // eslint-disable-next-line arrow-parens
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        // console.log("token Uri is ", tokenUri);
        const httpUri = getIPFSGatewayURL(tokenUri);
        // console.log("Http Uri is ", httpUri);
        const meta = await axios.get(httpUri);
        const price = ethers.utils.formatUnits(i.price.toString(), "ether");

        const item = {
          price,
          tokenId: i.tokenId.toNumber(),
          image: getIPFSGatewayURL(meta.data.image),
          name: meta.data.name,
          description: meta.data.description,
          country: meta.data.properties.country,
          collectionPoint: meta.data.properties.collectionPoint,
          weight: meta.data.properties.weight,
        };
        // console.log("item returned is ", item);
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  // eslint-disable-next-line no-unused-vars
  async function recycle(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    // console.log("item id clicked is", nft.tokenId);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      wastemarketplaceAddress,
      Waste.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    console.log("waste transaction completed, waste should show in UI ");
    const token = nft.tokenId;
    // console.log("token id is ", token);
    loadWaste();
    // navigate("/view", { state: token });
  }
  if (loadingState === "loaded" && !nfts.length) {
    return (
      <Box>
        <Text className="px-20 py-10 text-3xl">No Entries yet</Text>
      </Box>
    );
  }

  //Random number for date using npm = random-number
  var rn = require("random-number");
  var options = {
    min: 2,
    max: 10,
    integer: true,
  };

  return (
    <>
      <Text
        mb={1}
        pl={2}
        ml={5}
        fontSize="3xl"
        fontWeight="bold"
        color="#00A4BD"
      >
        Gigs Listed
      </Text>
      <Text
        mb={1}
        pl={2}
        ml={5}
        fontSize="xl"
        fontFamily="heading"
        color={HeaderTextColor}
      >
        `Hire Purpose`
      </Text>
      <SimpleGrid
        columns={[1, null, 3]}
        justifyContent="center"
        alignItems="center"
      >
        {nfts.map((nft, i) => (
          <Flex p={30} key={i}>
            <Box
              maxW="700"
              height="300"
              maxH="100%"
              bg="#76E5FC"
              _dark={{ bg: "gray.800" }}
              borderWidth="xl"
              rounded="lg"
              shadow="xl"
            >
              <HStack>
                <Image
                  px={3}
                  roundedTop="lg"
                  alt="image"
                  width="8vw"
                  height="calc(12vw*0.3)"
                  mb={2}
                  src={`${nft.image}#toolbar=0`}
                />
                <VStack>
                  {/* <Badge rounded="full" px="2" mt="2" colorScheme="blue">
                    Feature
                  </Badge> */}
                  <Link
                    mt="2"
                    mb={1}
                    fontSize="xl"
                    fontWeight="bold"
                    fontFamily="heading"
                  >
                    {nft.name}
                  </Link>
                  <Text
                    mb={1}
                    fontSize="lg"
                    fontWeight="semibold"
                    fontFamily="body"
                  >
                    {nft.weight}
                  </Text>

                  <HStack>
                    <Text fontSize="smaller" fontWeight="normal">
                      🌍{nft.country}
                    </Text>
                    <Text fontSize="smaller" fontWeight="normal">
                      📅 Posted {rn(options)} days ago
                    </Text>
                  </HStack>
                  <Text mb={1} fontSize="smaller" fontWeight="normal">
                    💸 basic salary: $
                    {nft.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>

                  <ReactReadMoreReadLess
                    fontSize="smaller"
                    fontWeight="normal"
                    charLimit={100}
                    readMoreText={"Read more"}
                    readLessText={"Read less"}
                    as="button"
                  >
                    {nft.description}
                  </ReactReadMoreReadLess>

                  <Button
                    cursor="pointer"
                    textAlign="center"
                    bgColor="#1A202C"
                    borderColor="#4A5568"
                    borderRadius="full"
                    width={100}
                    minH={10}
                    mx="10"
                    mt="0.5%"
                    onClick={() => recycle(nft)}
                  >
                    <Link
                      fontSize={{ base: "ms", md: "md" }}
                      py={3}
                      fontFamily="monospace"
                      fontWeight="semibold"
                      letterSpacing={1}
                      href={"https://xmtp-quickstart-react.vercel.app/"}
                    >
                      <Text fontFamily="heading">Connect</Text>
                    </Link>
                  </Button>
                </VStack>
              </HStack>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
}
