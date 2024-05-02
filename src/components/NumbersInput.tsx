"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { NumbersInputProps } from "@/types/types";

const NumbersInput: React.FC<NumbersInputProps> = ({ handleSubmit }) => {
  const [draw, setDraw] = useState<string[]>(Array(7).fill("")); // Initialize an array of 7 empty strings

  const handleChange = (index: number, value: string) => {
    const updatedDraw = [...draw]; // Create a copy of the array
    updatedDraw[index] = value; // Update the value at the specified index
    setDraw(updatedDraw); // Update the state
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>See Results for your Draw</CardTitle>
        <CardDescription>Enter your draw</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-row gap-3">
            {draw.map((value, index) => (
              <Input
                placeholder={(index + 1).toString()}
                onChange={(e) => handleChange(index, e.target.value)}
                className="text-center w-10"
                value={value}
                key={index}
              />
            ))}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={() => handleSubmit(draw)}>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default NumbersInput;
