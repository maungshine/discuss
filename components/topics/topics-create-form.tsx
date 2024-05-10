'use client';

import { 
    Popover,
    PopoverContent,
    PopoverTrigger,
    Input,
    Textarea,
    Button 
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/form-button";

export default function TopicCreateForm() {
    const [formState, action] = useFormState(actions.createTopic, {
        errors: {}
    });

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Creat a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                    <h3 className="text-lg">Create a Topic</h3>
                    <Input 
                    label="Name" 
                    labelPlacement="outside" 
                    placeholder="Name" 
                    name="name" 
                    isInvalid={!!formState.errors.name} 
                    errorMessage={formState.errors.name?.join(', ')} />
                    
                    <Textarea
                    name="description"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Describe your topic"
                    isInvalid={!!formState.errors.description} 
                    errorMessage={formState.errors.description?.join(', ')}
                    >
                    
                    </Textarea>

                    <div>
                       {
                            formState.errors._form 
                            ? 
                            (
                                <div className="
                                    p-2
                                    bg-red-200
                                    border
                                    border-red-400
                                    rounded-lg
                                ">
                                    {formState.errors._form?.join(', ')}
                                </div>
                            )
                            :
                            null
                        }
                    </div>
                    <FormButton>Submit</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}