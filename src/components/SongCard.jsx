import { useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { formatDateMDY } from "../utils/dateFormatChange";
import { timeFormat } from "../utils/timeFormatChange";

export default function SongCard({ song, index }) {
  return (
    <>
      <Flex
        width={"100%"}
        padding={"10px"}
        align={"center"}
        fontSize={"15px"}
        color={"gray.400"}
        _hover={{ bg: "rgba(255, 255, 255, 0.1)", borderRadius: "10px" }}
      >
        <Text width={"2%"}>{index + 1}</Text>
        <Flex width={"53%"}>
          <Image src={song.cover} height={"45px"} borderRadius={"5px"} />
          <Flex flexDir={"column"} pl={"10px"}>
            <Text color={"white"}>{song.title}</Text>
            <Text>{song.singer}</Text>
          </Flex>
        </Flex>
        <Text width={"23%"}>{song.album}</Text>
        <Text width={"17%"}>{formatDateMDY(song.dateAdded)}</Text>
        <Text width={"3%"}>{timeFormat(song.duration)}</Text>
      </Flex>
    </>
  );
}
