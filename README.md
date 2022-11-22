# Project info

Reusable card component with auto payment system detection and ability of customization card view.

# Run project

1. First of all you need to install dependencies from npm:

```
npm install
```

2. Run project via command:

```
npm start
```

# Auto detection of payment system

Implemented auto detection of payment system by using https://lookup.binlist.net/ API. <br>
On typing of first 4-6 digits of card number API call occurs to detect payment system. After receiving successful response from the API you can see payment system logo at the top right corner of the front card as you can see below.

<!-- TODO: insert gif animation of successful detection of payment systems -->

# Supported payment systems

-   4149 - Visa
-   5168 - Mastercard
-   6222 - Unionpay
-   3782 - AMEX
-   60110 - Discover
