import React from 'react';
import { Title, Table, Paper } from '@mantine/core';
import '../css/table.css';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const Logistics = () => {
  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td className="column-sm">{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Paper>
      <Table
        ta="center"
        striped
        withBorder
        withColumnBorders
        horizontalSpacing="xl"
        verticalSpacing="xs"
        captionSide="bottom"
      >
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );

  // return (
  //   <div>
  //     <Title order={1} color="yellow">
  //       Logistics
  //     </Title>
  //   </div>
  // );
};

export default Logistics;
