import React from 'react';
import { icons } from 'react-icons/lib';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box as="ul" sx={{
      listStyleType:'none',
      margin:0,
      padding:0,
      ...parentStyle 
    }}>
      {items.map((item,i) => (
        <Flex key={i} sx={{...childStyle}} as="li" className={item.isAvailable ? 'open' :'closed'}>
          <IconButton sx={styles.listIcon} aria-label="list icon">
        {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box> 
  );
}

const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};
