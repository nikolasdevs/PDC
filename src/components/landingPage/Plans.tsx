import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
//import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Flex",
    price: "5,000",
    description: [
      "Access to all Coding Challenges",
      "Weekly access to Webinars",
      "Exclusive access to Discord Channel",
      "Pro Badge with premium color",
    ],
    buttonText: "Choose monthly plan",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Recommended",
    price: "15,000",
    description: [
      "Access to all Coding Challenges",
      "Weekly access to Webinars",
      "Exclusive access to Discord Channel",
      "Pro Badge with premium color",
    ],
    buttonText: "Choose quarterly plan",
    buttonVariant: "contained",
  },
  {
    title: "Ultimate",
    price: "30,000",
    description: [
      "Access to all Coding Challenges",
      "Weekly access to Webinars",
      "Exclusive access to Discord Channel",
      "Pro Badge with premium color",
    ],
    buttonText: "Choose yearly plan",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
          display: "flex",

          flexDirection: "column",
          gap: { sm: "0.5rem", md: "1rem" },
        }}
      >
        <Typography
          component="h2"
          variant="subtitle1"
          color="primary"
          fontWeight="bold"
        >
          Start you coding journey
        </Typography>
        <Typography variant="h3" color="">
          Choose your plan and get instant access
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                // border: tier.title === "Pro" ? "1px solid" : undefined,
                borderColor: tier.title === "Pro" ? "primary.main" : undefined,
                background:
                  tier.title === "Pro"
                    ? "linear-gradient(#033363, #021F3B)"
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: tier.title === "Pro" ? "grey.100" : "",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {/* {tier.title === "Pro" && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === "light" ? "" : "none",
                        backgroundColor: "primary.contrastText",
                        "& .MuiChip-label": {
                          color: "primary.dark",
                        },
                        "& .MuiChip-icon": {
                          color: "primary.dark",
                        },
                      }}
                    />
                  )} */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 1,
                    color: tier.title === "Pro" ? "grey.50" : undefined,
                  }}
                >
                  <Typography component="h3" variant="h5" fontWeight="bold">
                    N{tier.price}
                  </Typography>
                  <Typography component="h3" variant="body2">
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: "grey.500",
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        // color:
                        //   tier.title === "Pro"
                        //     ? "primary.light"
                        //     : "primary.main",
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: tier.title === "Pro" ? "grey.200" : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{
                    paddingBlock: "1rem",
                  }}
                  // sx={{
                  //   background:
                  //     tier.title === "Pro"
                  //       ? "primary.main"
                  //       : undefined,
                  //   color:
                  //     tier.title === "Pro"
                  //       ? "grey.100"
                  //       : undefined,
                  // }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
