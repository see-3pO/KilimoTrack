import { HStack, Input, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import FormField from "../../components/FormField";

interface Props {
  crops: string[];
  cropInput: string;
  onCropChange: (e: any) => void;
  onCropKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onCropRemove: (crop: string) => void;
}

const CropInput = ({
  crops,
  cropInput,
  onCropChange,
  onCropKeyDown,
  onCropRemove,
}: Props) => {
  return (
    <FormField label="Crops Grown" name="crops">
      <HStack>
        {crops.map((crop) => (
          <Tag
            size="md"
            key={crop}
            borderRadius="full"
            variant="solid"
            colorScheme="green"
          >
            <TagLabel>{crop}</TagLabel>
            <TagCloseButton onClick={() => onCropRemove(crop)} />
          </Tag>
        ))}
      </HStack>
      <Input
        name="cropInput"
        placeholder="Enter a crop and press Enter"
        value={cropInput}
        onChange={onCropChange}
        onKeyDown={onCropKeyDown}
        focusBorderColor="brand.200"
      />
    </FormField>
  );
};

export default CropInput;
