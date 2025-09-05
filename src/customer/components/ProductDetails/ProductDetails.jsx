import { StarIcon } from "@heroicons/react/20/solid";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProductsById } from "../../../state/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../state/Cart/Action";

const fakeProduct = {
  name: "Basic Tee 6-Pack",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options...",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    "The 6-Pack includes two black, two white, and two heather gray Basic Tees...",
};

const reviews = { href: "#", average: 4, totalCount: 117 };




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {

  const [ selectedSize, setSelectedSize ] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {product}= useSelector( store => store.product);

  const handleAddtoCart =() =>{
    const data ={ productId: params.productid, size: selectedSize};
    console.log( "data _ " , data);
    dispatch(addItemToCart( data));
    navigate("/cart")

  }

  console.log("------", params);

  useEffect( () => {
    const data = { productId : params.productid };
    dispatch( findProductsById(data))
  },[ params.productid ] )


  return (
    <div className="bg-white lg-px-20">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {fakeProduct.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product?.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product?.title}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product?.imageUrl}
                src={product?.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              {fakeProduct.images.map((image, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 overflow-hidden rounded-lg border border-gray-200 cursor-pointer hover:opacity-75"
                >
                  <img
                    alt={image.alt}
                    src={image.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {" "}
                {product?.brand}
              </h1>
              <p className="text-lg text-gray-600 pt-1">
                {product?.title}
              </p>
            </div>

            {/* Price (horizontal) */}
            <div className="mt-4 flex items-center space-x-4">
              <p className="text-3xl font-bold text-gray-900">₹{product?.discountedPrice}</p>
              <p className="text-lg text-gray-500 line-through">₹{product?.price}</p>
              <p className="text-lg font-semibold text-green-700">{product?.discountPresent}% Off</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <div>
                  <Rating name="read-only" value={4.5} readOnly />
                </div>
                <p className="text-bold text-black hover:text-red-500">
                  5640 Ratings
                </p>
                <p className="font-medium text-bold text-indigo-900 hover:text-indigo-500">
                  {" "}
                  1999 Reviews
                </p>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {fakeProduct.sizes.map((size) => (
                    <label
                      key={size.name}
                      className={classNames(
                        size.inStock
                          ? `cursor-pointer ${selectedSize === size.name ?  "bg-indigo-600 text-white" :"bg-white text-gray-900 shadow-sm"}`
                          : "cursor-not-allowed bg-gray-50 text-gray-200",
                        "group relative flex items-center justify-center rounded-md border border-black py-3 px-4 text-sm font-medium uppercase  focus:outline-none sm:flex-1 sm:py-6"
                      )}
                      onClick={() => setSelectedSize(size.name)}
                      aria-disabled={size.quantity === 0} 
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size.name}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="sr-only"
                        disabled={!size.inStock}
                      />
                      <span>{size.name}</span>
                      {!size.inStock && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-gray-50 rounded-md"
                        >
                          <svg
                            className="h-full w-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1={0}
                              y1={100}
                              x2={100}
                              y2={0}
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <Button
                onClick={handleAddtoCart}
                  variant="contained"
                  color="error"
                  size="medium"
                  className="mt-3 w-[180px] py-2.5 px-5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </Button>
              </div>
            </form>

            {/* Description */} 
            <div className="py-10 border-t border-gray-200 mt-8">
              <p className="text-base text-gray-900">{product?.description}</p>
              <h3 className="mt-10 text-sm font-medium text-gray-900">
                Highlights
              </h3>
              <ul className="list-disc space-y-2 pl-4 text-sm mt-4">
                {fakeProduct.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-600">
                    {highlight}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-sm font-medium text-gray-900">
                Details
              </h3>
              <p className="text-sm text-gray-600 mt-4">{product?.details}</p>
            </div>
          </div>
        </section>

        {/* rating and reviews */}
        <section className="mb-10">
          <h1 className="font-semibold text-lg pb-4">
            Recent Review & Ratings
          </h1>

          <div className="border p-5">
            <Grid container spacing={7} alignItems="flex-start">
              {/* Left: reviews */}
              <Grid item xs={12} md={7}>
                <div className="space-y-5">
                  {[0, 1, 2].map((i) => (
                    <ProductReviewCard key={i} />
                  ))}
                </div>
              </Grid>

              {/* Right: product ratings */}
              <Grid
                item
                xs={12}
                md={5}
                className="md:pl-10 md:border-l"
                container
                direction="column"
                alignItems={{ xs: "flex-start", md: "flex-end" }}
              >
                <Grid item className="w-full md:w-auto">
                  <div className="md:flex md:justify-end">
                    <div>
                      <h2 className="text-xl font-semibold pb-1">
                        Product Ratings
                      </h2>

                      {/* Stars + count */}
                      <div className="flex items-center gap-3 mb-4">
                        <Rating value={4.6} precision={0.5} readOnly />
                        <span className="opacity-60 text-sm">
                          54,890 Ratings
                        </span>
                      </div>

                      {/* Distribution rows */}
                      <Box className="space-y-3">
                        {[
                          {
                            label: "Excellent",
                            value: 78,
                            count: "19,259",
                            color: "success",
                          },
                          {
                            label: "Very Good",
                            value: 52,
                            count: "1,259",
                            color: "success",
                          },
                          {
                            label: "Good",
                            value: 34,
                            count: "9,259",
                            color: "warning",
                          },
                          {
                            label: "Average",
                            value: 18,
                            count: "19,259",
                            color: "warning",
                          },
                          {
                            label: "Poor",
                            value: 8,
                            count: "259",
                            color: "error",
                          },
                        ].map((row, idx) => (
                          <Grid
                            key={idx}
                            container
                            alignItems="center"
                            columnSpacing={2}
                          >
                            <Grid item xs={4} md="auto">
                              <p className="text-sm opacity-80">{row.label}</p>
                            </Grid>
                            <Grid item xs>
                              <LinearProgress
                                variant="determinate"
                                value={row.value}
                                color={row.color}
                                sx={{
                                  height: 8,
                                  borderRadius: 5,
                                  bgcolor: "#e9ecef",
                                  "& .MuiLinearProgress-bar": {
                                    borderRadius: 5,
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs="auto">
                              <p className="text-sm opacity-70">{row.count}</p>
                            </Grid>
                          </Grid>
                        ))}
                      </Box>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* similar products */}

        <section className="pt-10">
          <h1 className=" px-4 py-7 text-2xl font-bold hover:text-red-600">
            Similar Products
          </h1>
          <div className="flex flex-wrap space-y-9">
            {mens_kurta.map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
