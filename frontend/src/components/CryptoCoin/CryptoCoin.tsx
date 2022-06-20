import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import '../CryptoCoin/CryptoCoin.scss';

interface CryptoCoinProps {
  name: string;
  symbol: string;
  image: string;
  price?: string;
  rank?: string;
  high?: string;
  low?: string;
  lastUpdate?: string,
  circulatingSupply: number,
  totalSupply: number,
  ath: number,
  atl: number,
}

const CryptoCoin: React.FC<CryptoCoinProps> = ({
  name,
  symbol,
  image,
  price,
  rank,
  high,
  low,
  lastUpdate,
  circulatingSupply,
  totalSupply,
  ath,
  atl,
}) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className="table-row">
      <TableCell className="table-cell" component="th" scope="row" sx={{display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 16}}>
        <img src={image} width={40} height={40} style={{marginRight: 20}} alt='crypto'/>
        {name}
      </TableCell>
      <TableCell align="right" className="table-cell">{symbol}</TableCell>
      <TableCell align="right" className="table-cell">${price}</TableCell>
      <TableCell align="right" className="table-cell">{rank}</TableCell>
      <TableCell align="right" className="table-cell">+{high}</TableCell>
      <TableCell align="right" className="table-cell">-{low}</TableCell>
      <TableCell align="right" className="table-cell">{lastUpdate}</TableCell>
      <TableCell align="right" className="table-cell">{circulatingSupply}</TableCell>
      <TableCell align="right" className="table-cell">{totalSupply}</TableCell>
      <TableCell align="right" className="table-cell">{ath}</TableCell>
      <TableCell align="right" className="table-cell">{atl}</TableCell>
    </TableRow>
  );
};

export default CryptoCoin;
