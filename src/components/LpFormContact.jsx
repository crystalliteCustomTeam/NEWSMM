"use client";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const LpFormContact = () => {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 gap-3">
          <div className="mb-2">
            <Label htmlFor="name" className="font-bold">
              Full Name*
            </Label>
            <Input
              type="name"
              id="name"
              placeholder="Type Name"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="email" className="font-bold">
              Email Address*
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Type Email Address"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="Phone" className="font-bold">
              Phone*
            </Label>
            <Input
              type="phone"
              id="phone"
              placeholder="(000) 000-0000"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="url" className="font-bold">
              Website*
            </Label>
            <Input
              type="url"
              id="url"
              placeholder="Type Your Website"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <Button
            type="submit"
            variant="outline"
            className="bg-[linear-gradient(180deg,_#351a4b,_#723389)] text-white rounded-none"
          >
            Increase My Sales
          </Button>
        </div>
      </form>
    </>
  );
};

export default LpFormContact;
