import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
  VStack
} from "@chakra-ui/react";
import { useShopper } from "@rwatt451/ordercloud-react";
import { BuyerAddress, Me } from "ordercloud-javascript-sdk";
import { useCallback, useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import CartSkeleton from "./ShoppingCartSkeleton";
import CartSummary from "./ShoppingCartSummary";

export const TABS = {
  INFORMATION: 0,
  SHIPPING: 1,
  PAYMENT: 2,
};

export const ShoppingCart = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);

  const { orderWorksheet, worksheetLoading, deleteCart, submitCart } =
    useShopper();

  const navigate = useNavigate();
  const toast = useToast();
  const [returnLocations, setReturnLocations] = useState<BuyerAddress[]>();

  const getReturnLocations = useCallback(async () => {
    try {
      const result = await Me.ListAddresses();
      setReturnLocations(result.Items);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getReturnLocations();
  }, []);

  const submitOrder = useCallback(async () => {
    setSubmitting(true);
    if (!orderWorksheet?.Order?.ID) return;
    try {
      await submitCart();
      setSubmitting(false);
      navigate(`/order-confirmation?orderID=${orderWorksheet.Order.ID}`);
    } catch (err) {
      console.error("Error submitting order:", err);
      setSubmitting(false);
      toast({
        title: "Error submitting order",
        description:
          "There was an issue submitting your order. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [navigate, orderWorksheet?.Order?.ID, submitCart, toast]);

  const deleteOrder = useCallback(async () => {
    if (!orderWorksheet?.Order?.ID) return;
    await deleteCart();
  }, [deleteCart, orderWorksheet?.Order?.ID]);

  return (
    <>
      {worksheetLoading ? (
        <CartSkeleton />
      ) : (
        <>
          {orderWorksheet?.Order &&
          orderWorksheet?.LineItems &&
          orderWorksheet?.LineItems?.length ? (
            <>
              {submitting && (
                <Center
                  boxSize="full"
                  h="100vh"
                  position="absolute"
                  zIndex={1234}
                  background="whiteAlpha.400"
                >
                  <VStack>
                    <Spinner
                      label="submitting order..."
                      thickness="10px"
                      speed=".5s"
                      color="gray.300"
                      opacity=".9"
                      size="xl"
                      zIndex={1235}
                    />
                    <Text color="gray.500">Submitting order...</Text>
                  </VStack>
                </Center>
              )}
              <Grid
                gridTemplateColumns={{ md: "3fr 2fr" }}
                w="full"
                justifyItems="stretch"
                flex="1"
              >
                <GridItem alignSelf="flex-end" h="full">
                  <Container
                    maxW="container.lg"
                    mx="0"
                    ml="auto"
                    p={{ base: 6, lg: 12 }}
                  >
                    <Heading mb={6}>Checkout</Heading>

                    <Tabs
                      size="sm"
                      variant="soft-rounded"
                    >
                      <TabList>
                        <Tab>Your Information</Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel as={VStack} alignItems="stretch">
                          <Stack direction={["column", "row"]} spacing={6}>
                            <FormControl>
                              <FormLabel>Email</FormLabel>
                              <Input placeholder="Email" />
                            </FormControl>
                            <FormControl flexBasis="75%">
                              <FormLabel>Phone</FormLabel>
                              <Input placeholder="Phone" />
                            </FormControl>
                          </Stack>
                          <Heading size="md" my={6}>
                            Trade in location
                          </Heading>
                          <FormControl>
                            <FormLabel>Choose eligible location</FormLabel>
                            <Select placeholder="Select state/territory">
                              {returnLocations?.map((location) => (
                                <option value={location.ID}>
                                  {location.CompanyName} | {location.Street1},{" "}
                                  {location.City}, {location.State}{" "}
                                  {location.Zip}
                                </option>
                              ))}
                            </Select>
                          </FormControl>
                          <Button
                            as={RouterLink}
                            to="/trade-in-confirmation"
                            alignSelf="flex-end"
                            onClick={deleteOrder}
                            mt={6}
                          >
                            Complete trade-in
                          </Button>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Container>
                </GridItem>

                <GridItem bgColor="blackAlpha.100" h="full">
                  <Container
                    maxW="container.sm"
                    mx="0"
                    mr="auto"
                    p={{ base: 6, lg: 12 }}
                  >
                    {worksheetLoading ? (
                      <Spinner />
                    ) : (
                      <CartSummary
                        deleteOrder={deleteOrder}
                        order={orderWorksheet?.Order}
                        lineItems={orderWorksheet?.LineItems}
                        promotions={orderWorksheet?.OrderPromotions}
                        onSubmitOrder={submitOrder}
                        tabIndex={0}
                      />
                    )}
                  </Container>
                </GridItem>
              </Grid>
            </>
          ) : (
            <Center flex="1">
              <VStack mt={-28}>
                <Heading>Cart is empty</Heading>
                <Button as={RouterLink} size="sm" to="/products">
                  Continue shopping
                </Button>
              </VStack>
            </Center>
          )}
        </>
      )}
    </>
  );
};

export default ShoppingCart;
