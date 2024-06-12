$(document).ready(function () {
    const client = window.ShopifyBuy.buildClient({
        domain: 'gingerfox.co.uk',
        storefrontAccessToken: '5f230d2d8cbccf9bbe5d60551645777f'
    });


    $("#BuyNowBtnBanner").click(function () {
        const input = {
            lineItems: [{
                variantId: 'gid://shopify/ProductVariant/47080010809630',
                quantity: 1,
                customAttributes: [{ key: "Microsite", value: "Traitors" }]
            }],
        }
        client.checkout.create(input).then((checkout) => {
            location.href = checkout.webUrl;
        });
    });

    $("#BuyNowBtn").click(function () {
        const input = {
            lineItems: [{
                variantId: 'gid://shopify/ProductVariant/47080010809630',
                quantity: 1,
                customAttributes: [{ key: "Microsite", value: "Traitors" }]
            }]
        }
        client.checkout.create(input).then((checkout) => {
            location.href = checkout.webUrl;
        });
    });
})