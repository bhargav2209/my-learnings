import {useState} from "react";
import {Button, createStandaloneToast} from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const ManageState = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getFakeData = () => {
        alert("Function is Called")
    }

    const setAPIManageState = async () => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 4000));
            // throw new Error('Parameter is not a number!');
            toast({
                title: 'API Call successfully',
                status: 'success',
            });
            getFakeData(); // TODO This is a Api Data.
        } catch (e) {
            console.error('Error in API call', e);
            toast({
                title: 'Error in API call',
                status: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <Button
            colorScheme='blue'
            variant="solid"
            type={'submit'}
            size="xs"
            isDisabled={isLoading}
            onClick={setAPIManageState}
        >
            Check Me
        </Button>
    )
};
