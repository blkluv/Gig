import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  const SubHeaderTextColor = useColorModeValue("blue.800", "white");
  const HeaderTextColor = useColorModeValue("#76E5FC", "#76E5FC");
  const HeaderTextColo2 = useColorModeValue("#0E76FD", "#0E76FD");

  return (
    <>
      <Stack minH="80vh" direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "m", md: "xl", lg: "2xl" }}>              
              <Text fontFamily="monospace" color={HeaderTextColor} as={"span"}>Hire Purpose</Text>

              <Text fontFamily="monospace" color={HeaderTextColo2} as={"span"} mr={4}>ARVRtise your purpose on our freelance marketplace - a movement to create a more equitable and inclusive hiring process. It is an effort to ensure that employers are considering the potential of all candidates, regardless of their background or identity. Show ARVRtise your talent as 'Proof of work' and we ARVRtise your skills. We bridge purposed based freelancers with purposed based companies. With Unstoppable Domain, empowering creators and users to take control of their own identities in a fully decentralized manner.</Text>            </Heading>            

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>              

              <Button textColor="white" borderRadius="full" bgColor="#0E76FD" shadow="lg" fontSize="m" textTransform="uppercase" fontWeight="normal" as="kbd" letterSpacing={2} textDecoration="none">                                                                                                                                                        

                <Link href={"talentList"}>🔎 Talent</Link>              

              </Button>              

              <Button textColor="white" borderRadius="full" bgColor="#0E76FD" shadow="lg" fontSize="m" textTransform="uppercase" fontWeight="normal" as="kbd" letterSpacing={2} textDecoration="none">                                                                                                                        

                <Link href={"gigiList"}>🔎 Purpose</Link>              

              </Button>            

            </Stack>          

          </Stack>        

        </Flex>        

        <Flex px={5} flex={1} >          

          <Image alt={"cover-image"} borderTopRightRadius="10rem" borderBottomLeftRadius="10rem" borderTopLeftRadius="15rem