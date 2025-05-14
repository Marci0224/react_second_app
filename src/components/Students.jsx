import React from "react";
import { students } from "../data";
import { Card, Flex, Text } from "@radix-ui/themes";

export const Students = () => {
  console.log(students);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Flex direction="column" gap="3" maxWidth="350px">
        {students.map((obj) => (
          <Card variant="surface" key={obj.id}
            style={{cursor: obj.status=='active' ? 'pointer' : 'not-allowed', 
                opacity: obj.status=='inactive' ? 0.7 : 1}}
          >
            <Text as="div" size="2" weight="bold">
              {obj.name}
            </Text>
            <Text as="div" color="gray" size="2">
              Status: {obj.status}
            </Text>
          </Card>
        ))}
      </Flex>
    </div>
  );
};
