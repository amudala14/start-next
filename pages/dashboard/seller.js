import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DetailsCards from '../../compontents/Dashboard/DetailsCards';
import {
  sellerPageContent,
  statisticNumbers,
  notificationData,
} from '../../data/admin';
import Wrapper from '../../compontents/Dashboard/Layouts/Wrapper';
import StatisticNumbers from '../../compontents/Dashboard/StatisticNumbers';
import NotifificationCard from '../../compontents/Dashboard/NotificationCard';
import SellerDetails from '../../compontents/Dashboard/SellerDetails';
import AddNewProduct from '../../compontents/Dashboard/Forms/AddNewProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Seller() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper>
      <StatisticNumbers data={statisticNumbers} />
      <div className='row gutters-sm '>
        <div className='col-12 col-md-6'>
          <DetailsCards data={sellerPageContent} />
        </div>
        <div className='col-12 col-md-6'>
          <NotifificationCard data={notificationData} />
          <SellerDetails />
        </div>
      </div>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'>
          <Typography className={classes.heading}>New product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewProduct />
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
}
