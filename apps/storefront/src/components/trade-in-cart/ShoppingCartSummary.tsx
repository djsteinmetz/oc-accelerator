import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  LineItem,
  Order,
  OrderPromotion,
  RequiredDeep,
} from "ordercloud-javascript-sdk";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import OcCurrentOrderLineItemList from "./OcCurrentOrderLineItemList";
import { TABS } from "./ShoppingCart";

interface CartSummaryProps {
  order: RequiredDeep<Order>;
  lineItems: LineItem[];
  promotions?: OrderPromotion[];
  onSubmitOrder: () => void;
  deleteOrder: () => void;
  tabIndex: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  order,
  lineItems,
  deleteOrder,
  tabIndex,
}) => {
  const handleLineItemChange = (newLi: LineItem) => {
    // Implement the logic to update the line item
    console.log("Line item updated:", newLi);
  };
  
  return (
    <VStack align="stretch" spacing={6}>
      <ButtonGroup alignSelf="flex-end" alignItems="center" gap={3} mt={-3}>
        <Button variant="link" size="xs" onClick={deleteOrder}>
          Clear cart
        </Button>
        <Button
          size="xs"
          variant="outline"
          alignSelf="flex-end"
          as={RouterLink}
          to="/products"
        >
          Continue shopping
        </Button>
      </ButtonGroup>
      <OcCurrentOrderLineItemList
        lineItems={lineItems}
        emptyMessage="Your cart is empty"
        onChange={handleLineItemChange}
        editable={false}
      />
      <Divider />
      <Divider />
      <Stack spacing={3}>
        <Flex justify="space-between">
          <Text>Subtotal</Text>
          <Text>${order.Subtotal?.toFixed(2)}</Text>
        </Flex>
        {order.PromotionDiscount && order.PromotionDiscount > 0 && (
          <Flex justify="space-between">
            <Text>Promotion Discount</Text>
            <Text>- ${order.PromotionDiscount?.toFixed(2)}</Text>
          </Flex>
        )}
        <Flex justify="space-between">
          <Text>Shipping</Text>
          {tabIndex !== TABS.SHIPPING ||
            (tabIndex !== TABS.INFORMATION && <Text></Text>)}
          <Text>
            {order.ShippingCost === 0
              ? "FREE SHIPPING"
              : "$" + order.ShippingCost}
          </Text>
        </Flex>
        <Flex justify="space-between" fontWeight="bold" fontSize="lg">
          <Text>Total</Text>
          <Text>${order.Total?.toFixed(2)}</Text>
        </Flex>
      </Stack>
    </VStack>
  );
};

export default CartSummary;
