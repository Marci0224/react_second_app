import React from "react";
import { students } from "../data";
import { Card, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

export const Students = () => {
  const [selectedId, setSelectedId] = useState(null);
  console.log(students);
  console.log(selectedId);

  const selectedStudent = students.find(obj => obj.id == selectedId)
  console.log(selectedStudent);


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Flex direction="column" gap="3" maxWidth="350px">
        {students.map((obj) => (
          <Card variant="surface" key={obj.id}
            style={{
              cursor: obj.status == 'active' ? 'pointer' : 'not-allowed',
              opacity: obj.status == 'inactive' ? 0.7 : 1,
              outline: obj.id == selectedId ? '2px solid var(--accent-8)' : undefined
            }}
            onClick={() => obj.status == 'active' && setSelectedId(obj.id)}
          >
            <Text as="div" size="2" weight="bold">
              {obj.name}
            </Text>
            <Text as="div" color="gray" size="2">
              Status: {obj.status}
            </Text>
          </Card>
        ))}
        {selectedStudent &&
          <div>
            <Text>Jegyek:</Text>
            <Flex gap="5px" >
              {selectedStudent.grades.map((grade, index) =>
                <div style={{outline:'2px solid var(--accent-8)',padding:'5px',height:'30px',width:'30px',margin:'5px',textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>
                  <Text key={index}>
                    {grade}
                  </Text>
                </div>
              )}
            </Flex>
          </div>
        }
      </Flex>
    </div>
  );
};
