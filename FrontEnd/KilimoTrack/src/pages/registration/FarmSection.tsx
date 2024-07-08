import React, { useState } from "react";
import CropInput from "./CropInput";
import FormSection from "./FormSection";
import FormField from "../../components/FormField";
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";

const FarmSection = () => {
  const [crops, setCrops] = useState<string[]>([]);
  const [cropInput, setCropInput] = useState<string>("");

  const handleInputCrop = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && cropInput.trim() !== "") {
      if (!crops.includes(cropInput.trim())) {
        setCrops([...crops, cropInput.trim()]);
      }
      setCropInput("");
      event.preventDefault();
    }
  };

  const handleRemoveCrop = (cropToRemove: string) => {
    setCrops(crops.filter((crop) => crop !== cropToRemove));
  };

  return (
    <FormSection title="Farm Details">
      <FormField label="Farm Size" name="farmSize">
        <NumberInput
          min={0.1}
          precision={1}
          step={0.1}
          focusBorderColor="brand.200"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormField>
      
      <CropInput
        crops={crops}
        cropInput={cropInput}
        onCropChange={(e) => setCropInput(e.target.value)}
        onCropKeyDown={handleInputCrop}
        onCropRemove={handleRemoveCrop}
      />
    </FormSection>
  );
};

export default FarmSection;
