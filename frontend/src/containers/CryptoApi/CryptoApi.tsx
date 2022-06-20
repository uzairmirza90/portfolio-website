import React from "react";
import axios from "axios";
import CryptoCoin from "../../components/CryptoCoin/CryptoCoin";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { cryptoApiHeader } from "../../utils/data/data";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const CryptoApi: React.FC = () => {
  const apiUrl: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
  const [cryptoData, setCryptoData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setCryptoData(res.data);
      })
      .catch((err) => console.log(err));
  }, [apiUrl]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container className="container">
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <CircularProgress size={50} sx={{color: 'rgba(58, 173, 144, 0.837)'}}/>
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ maxHeight: 550 }}>
          <Table aria-label="sticky table" stickyHeader>
            <TableHead>
              <TableRow>
                {cryptoApiHeader?.map((header: string, index: number) => {
                  return (
                    <TableCell
                      key={index}
                      sx={{
                        fontWeight: 600,
                        backgroundColor: "rgba(58, 173, 144, 0.837)",
                        color: "white",
                      }}
                      align={header !== "Name" ? "right" : "left"}
                    >
                      {header}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "var(--container-color)" }}>
              {cryptoData?.map((item, index) => {
                return (
                  <CryptoCoin
                    key={index}
                    name={item.name}
                    symbol={item.symbol}
                    image={item.image}
                    price={item.current_price}
                    rank={item.market_cap_rank}
                    high={item.high_24h}
                    low={item.low_24h}
                    lastUpdate={item.last_updated}
                    circulatingSupply={item.circulating_supply}
                    totalSupply={item.total_supply}
                    ath={item.ath}
                    atl={item.atl}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default CryptoApi;
