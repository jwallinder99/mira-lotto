"use client";
import React, { useEffect, useState } from "react";
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
import { DateState, NumbersInputProps } from "@/types/types";
import StartDatePicker from "./StartDatePicker";
import EndDatePicker from "./EndDatePicker";
import { formatDate } from "@/lib/utils";

const NumbersInput: React.FC<NumbersInputProps> = ({ handleSubmit }) => {
	const [draw, setDraw] = useState<string[]>(Array(7).fill("")); // Initialize an array of 7 empty strings

	const [secondaryDraw, setSecondaryDraw] = useState<string[]>(
		Array(2).fill("")
	);

	const [startDate, setStartDate] = useState<Date>();

	const [endDate, setEndDate] = useState<Date>();

	const handleChange = (index: number, value: string) => {
		const updatedDraw = [...draw]; // Create a copy of the array
		updatedDraw[index] = value; // Update the value at the specified index
		setDraw(updatedDraw); // Update the state
	};

	const handleSecondaryChange = (index: number, value: string) => {
		const updatedDraw = [...secondaryDraw];
		updatedDraw[index] = value;
		setSecondaryDraw(updatedDraw);
	};

	const handleButtonClick = () => {
		const startingDate = formatDate(startDate);
		const endingDate = formatDate(endDate);
		handleSubmit(draw, secondaryDraw, startingDate, endingDate);
	};

	return (
		<div className="flex flex-col items-center justify-center mt-5">
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
						<h3 className="mx-auto">Secondary Numbers</h3>
						<div className="flex flex-row gap-3 justify-center">
							{secondaryDraw.map((value, index) => (
								<Input
									placeholder={(index + 1).toString()}
									onChange={(e) => handleSecondaryChange(index, e.target.value)}
									className="text-center w-10"
									value={value}
									key={index}
								/>
							))}
						</div>
						<div className="flex flex-col justify-center items-center">
							<div>Start Date</div>
							<StartDatePicker date={startDate} setDate={setStartDate} />
							<div>End Date</div>
							<EndDatePicker date={endDate} setDate={setEndDate} />
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-center">
					<Button onClick={handleButtonClick}>Submit</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default NumbersInput;
