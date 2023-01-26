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
  const HeaderTextColor = useColorModeValue("#00A4BD", "#00A4BD");
  const HeaderTextColo2 = useColorModeValue("#116EBE", "#116EBE");

  return (
    <>
      <Stack minH="80vh" direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "m", md: "xl", lg: "2xl" }}>
              <Text
                fontFamily="monospace"
                as={"span"}
                position={"relative"}
                color={HeaderTextColo2}
                mr={4}
              >
                ARVRtise Gig,
              </Text>

              <Text fontFamily="monospace" color={HeaderTextColor} as={"span"}>
               The world united hiring for purpose.
              </Text>
            </Heading>
            <Text
              fontFamily="monospace"
              fontSize={{ base: "md", lg: "xl" }}
              color={SubHeaderTextColor}
            >
              <center>A blockchain freelance marketplace - a movement to create a more 
              equitable and inclusive hiring process. It is an effort to ensure 
              that employers are considering the potential of all candidates, 
              regardless of their background or identity. This movement encourages 
              employers to look beyond traditional qualifications and consider the 
              unique skills, experiences, and perspectives that each individual 
              brings to the table. With Unstoppable Domain, empowering
              creators and users to take control of their own identities in a
              fully decentralized manner.</center>
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                textColor="white"
                borderRadius="full"
                bgColor="#116EBE"
                shadow="lg"
                fontSize="m"
                textTransform="uppercase"
                fontWeight="normal"
                as="kbd"
                letterSpacing={2}
                textDecoration="none"
              >
                <Link href={"talentList"}>👁️ Talent</Link>
              </Button>
              <Button
                textColor="white"
                borderRadius="full"
                bgColor="#0E76FD"
                shadow="lg"
                fontSize="m"
                textTransform="uppercase"
                fontWeight="normal"
                as="kbd"
                letterSpacing={2}
                textDecoration="none"
              >
                <Link href={"gigiList"}>👁️ Work</Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex px={5} flex={1}>
          <Image
            alt={"cover-image"}
            borderTopRightRadius="10rem"
            borderBottomLeftRadius="10rem"
            borderTopLeftRadius="15rem"
            borderBottomRightRadius="15rem"
            objectFit="cover"
            height={600}
            maxW="100%"
            my="auto"
            src="/working.svg"
          />
        </Flex>
      </Stack>
    </>
  );
}
