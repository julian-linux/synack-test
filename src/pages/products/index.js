// Libraries
import React, { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

// Material Components
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Components
import Loading from 'components/loading';
import Table from 'components/table';
import Search from 'components/search';
import Help from 'components/help';

// Hooks
import useProductsData from 'hooks/useProductsData';

// Intl
import Intl, { onlyText } from 'config/intl';

// Utils
import { money } from 'utils/format';

const configureTableData = (data) => {
  const head = [
    onlyText('IMAGE'),
    onlyText('ID'),
    onlyText('NAME'),
    onlyText('CODE'),
    onlyText('PRICE'),
    onlyText('PRODUCT'),
    onlyText('DESCRIPTION'),
  ];

  const body = map(data, ({
    code, description, id, img, name, price, product,
  }) => ([
    <Avatar src={img} variant="square" alt={name} />,
    id,
    name,
    <Typography noWrap style={{ width: '100px' }} title={code}>{code}</Typography>,
    money(price),
    product,
    <Typography noWrap style={{ width: '100px' }} title={description}>{description}</Typography>,
  ]));

  return {
    head,
    body,
  };
};

const Products = () => {
  const [tableData, setTableData] = useState({ head: [], body: [] });
  const [firstNameSearch, setFirstNameSearch] = useState(false);

  const {
    getProducts, loading, data, _page, hasNextPage, name_like,
  } = useProductsData();

  const handleSearch = ({ key }) => {
    setFirstNameSearch(true);
    getProducts({ name_like: key, _page: 1 });
  };

  const handleClear = () => {
    setFirstNameSearch(false);
    getProducts({ name_like: '', _page: 1 });
  };

  const handleLoadMore = () => {
    /**
     * this validation is for not to make a double request when search by name is too sort and table reach end page
     */
    if (firstNameSearch) {
      setFirstNameSearch(false);
    } else {
      getProducts({ name_like, _page: _page + 1 });
    }
  };

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
  });

  useEffect(() => {
    if (!isEmpty(data)) {
      setTableData(configureTableData(data));
    }
  }, [data]);

  return (
    <Box mb={2}>
      {isEmpty(data) || loading ? (<Loading backdrop />) : ''}
      <Box display="flex">
        <Intl langKey="PRODUCTS" color="primary" variant="h3" />
        <Help />
      </Box>
      <Search onSearch={handleSearch} onClear={handleClear} loading={loading} />
      <Table {...tableData} innerRef={infiniteRef} fetchingMore={_page > 1 && loading} />
    </Box>
  );
};

export default Products;
