import { Table, Input, Button, Row } from "antd";
import axios from "axios";
import { string } from "prop-types";
import { Typography, Switch } from "antd";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

import React, { useState, useEffect } from "react";
const { Text } = Typography;

function Tabledata() {
  const [dataSources, setDataSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const [select, setSelect] = useState({
    seletedkeys: [],
  });
  // console.log("SelectedRow keys", select);
  const { selectedRowKeys } = select;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelect({
        ...select,
        selectedRowKeys: selectedRowKeys,
      });
    },
  };

  const ondelete = () => {
    let selectedData = selectedRowKeys;
    dataSources.forEach((e) => {
      if (e.select) {
        selectedData.push(e.id);
      }
    });
    // console.log(selectedData);
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${selectedData}`)
      .then((data) => {
        console.log("Checkbox Delete", data);
        getData();
      })
      .catch((err) => console.log(err));
  };

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setLoading(false);
    console.log(res);
    setDataSources(
      res.data.map((row) => ({
        name: row.name,
        email: row.email,
        id: row.id,
        phone: row.phone,
        key: row.id,
      }))
    );
  };

  return (
    <>
      <Row>
        <Input.Search
          placeholder="search.."
          onSearch={(value) => setSearch(value)}
          style={{
            width: "250px",
            paddingLeft: 20,
            marginBottom: 20,
            marginTop: 20,
          }}
        />
        <Text
          type="secondary"
          style={{
            paddingLeft: "50px",

            marginBottom: 20,
            marginTop: 20,
          }}
        >
          {selectedRowKeys && selectedRowKeys.length} selected
        </Text>
        <Text
          style={{
            paddingLeft: "50px",

            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <AiOutlineEye style={{ color: "gray" }} />
          View
        </Text>
        <Button
          icon={<RiDeleteBin5Line style={{ color: "gray" }} />}
          onClick={() => ondelete()}
          type="text"
          style={{
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          delete
        </Button>
      </Row>
      <div>
        {loading ? (
          "Loading"
        ) : (
          <>
            <Table
              columns={[
                { title: "Id", dataIndex: "id" },
                {
                  title: "Customer Name",
                  dataIndex: "name",

                  filteredValue: [search],
                  onFilter: (value, index) => {
                    return String(index.name)
                      .toLowerCase()
                      .includes(value.toLowerCase());
                  },
                },
                { title: "Mobile No", dataIndex: "phone" },

                { title: "Email Id", dataIndex: "email" },
                {
                  title: "User status",
                  dataIndex: "",
                  render: (text) => <Switch defaultChecked />,
                },
              ]}
              dataSource={dataSources}
              pagination={{ pageSize: 10 }}
              rowSelection={rowSelection}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Tabledata;
