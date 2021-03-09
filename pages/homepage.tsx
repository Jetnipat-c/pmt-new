import React, { useState, useEffect } from "react";
import { StyleWrapper, Table_div } from "../styles/components/homepage/styles";
import withAuth from "../hoc/withAuth";
import Layouts from "../layouts/Layouts";
import { Divider, Input, Table, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { service } from "../service/index";

const Homepage = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchInput, setSearchInput] = useState();
  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      maximumSignificantDigits,
    }).format(number);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node: any) => {
            setSearchInput(node);
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    // onFilterDropdownVisibleChange: (visible) => {
    //   if (visible) {
    //     setTimeout(() => searchInput.select(), 100);
    //   }
    // }

    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const data_obj = [
    {
      product_id: 1,
      company: "company-a",
      receipt_code: "262sx",
      product_width: "3",
      product_size: "24*120",
      product_color: "กระจกใสเขียว",
      price: "200",
      note: "-",
      photo: "images/product/product_1.jpg",
      createdAt: "2021-02-28T07:22:43.000Z",
      updatedAt: "2021-02-28T07:22:44.000Z",
      deletedAt: null,
    },
    {
      product_id: 2,
      company: "company-b",
      receipt_code: "ddf",
      product_width: "6",
      product_size: "24*96",
      product_color: "กระจกใสเขียว",
      price: "9999",
      note: "-",
      photo: "images/product/product_2.jpg",
      createdAt: "2021-02-28T08:37:06.000Z",
      updatedAt: "2021-02-28T08:37:09.000Z",
      deletedAt: null,
    },
    {
      product_id: 3,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_3.jpg",
      createdAt: "2021-03-09T08:06:31.000Z",
      updatedAt: "2021-03-09T08:06:31.000Z",
      deletedAt: null,
    },
    {
      product_id: 4,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_4.jpg",
      createdAt: "2021-03-09T08:06:33.000Z",
      updatedAt: "2021-03-09T08:06:33.000Z",
      deletedAt: null,
    },
    {
      product_id: 5,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_5.jpg",
      createdAt: "2021-03-09T08:06:34.000Z",
      updatedAt: "2021-03-09T08:06:35.000Z",
      deletedAt: null,
    },
    {
      product_id: 6,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_6.jpg",
      createdAt: "2021-03-09T08:06:36.000Z",
      updatedAt: "2021-03-09T08:06:36.000Z",
      deletedAt: null,
    },
    {
      product_id: 7,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_7.jpg",
      createdAt: "2021-03-09T08:06:37.000Z",
      updatedAt: "2021-03-09T08:06:38.000Z",
      deletedAt: null,
    },
    {
      product_id: 8,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_8.jpg",
      createdAt: "2021-03-09T08:06:39.000Z",
      updatedAt: "2021-03-09T08:06:39.000Z",
      deletedAt: null,
    },
    {
      product_id: 9,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_9.jpg",
      createdAt: "2021-03-09T08:22:44.000Z",
      updatedAt: "2021-03-09T08:22:44.000Z",
      deletedAt: null,
    },
    {
      product_id: 10,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_10.jpg",
      createdAt: "2021-03-09T08:22:45.000Z",
      updatedAt: "2021-03-09T08:22:46.000Z",
      deletedAt: null,
    },
    {
      product_id: 11,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_11.jpg",
      createdAt: "2021-03-09T08:22:46.000Z",
      updatedAt: "2021-03-09T08:22:47.000Z",
      deletedAt: null,
    },
    {
      product_id: 12,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_12.jpg",
      createdAt: "2021-03-09T08:22:48.000Z",
      updatedAt: "2021-03-09T08:22:48.000Z",
      deletedAt: null,
    },
    {
      product_id: 13,
      company: "Company A",
      receipt_code: "x1a6sqw",
      product_width: "2",
      product_size: "24*84 ",
      product_color: "กระจกใส",
      price: "3000",
      note: "",
      photo: "images/product/product_13.jpg",
      createdAt: "2021-03-09T08:22:49.000Z",
      updatedAt: "2021-03-09T08:22:49.000Z",
      deletedAt: null,
    },
  ];

  const columns: any = [
    {
      title: "รหัสสินค้า",
      dataIndex: "product_id",
      key: "product_id",
      // render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("product_id"),
    },
    {
      title: "บริษัท",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "รหัสสินค้า",
      dataIndex: "receipt_code",
      key: "receipt_code",
    },
    {
      title: "ขนาด",
      dataIndex: "product_size",
      key: "product_size",
    },
    {
      title: "ความกว้าง",
      dataIndex: "product_width",
      key: "product_width",
    },
    {
      title: "สี",
      dataIndex: "product_color",
      key: "product_color",
    },
    {
      title: "วันที่นำเข้า",
      dataIndex: "createdAt",
      key: "createdAt",

      render: (text) => <label>{text.slice(0, 10)}</label>,
    },
    {
      title: "ราคาที่ซื้อ",
      dataIndex: "price",
      key: "price",

      render: (text) => <label>{formatDollar(text, 3)}</label>,
    },
    {
      title: "อื่นๆ",
      dataIndex: "note",
      key: "note",
    },
  ];

  const getdata = async () => {
    let res: any = await service({
      url: `/product/stock`,
      methods: "get",
    });
    if (res && res.status === 200) {
      console.log(typeof res.data);
      setData(res.data);
    } else {
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <React.Fragment>
      <Layouts>
        <Divider>
          <h1>คลังสินค้า</h1>
        </Divider>
        <Table_div>
          <Table
            scroll={{
              y: 300,
              x: "100vw",
            }}
            columns={columns}
            dataSource={data_obj}
            rowKey="product_id"
          />
        </Table_div>
      </Layouts>
    </React.Fragment>
  );
};
//export default withAuth(Homepage);
export default Homepage;
