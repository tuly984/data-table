import React, { useState,useEffect} from 'react';
import { FaCaretRight } from 'react-icons/fa';
import 'antd/dist/antd.css';
import { Tag, Space , Table, Button, Input, Card} from 'antd';

const myData = [
	{
	  key: '1',
	  name: 'John Brown',
	  age: 32,
	  address: 'New York No. 1 Lake Park',
	  tags: ['NUMEROVERBE'],
	},
	{
	  key: '2',
	  name: 'Jim Green',
	  age: 42,
	  address: 'London No. 1 Lake Park',
	  tags: ['USER'],
	},
	{
	  key: '3',
	  name: 'Joe Black',
	  age: 32,
	  address: 'Sidney No. 1 Lake Park',
	  tags: ['ADMINISTRATOR'],
	},
  ];


function App() {
	const columns = [
		{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name',
		  sorter: (a,b) => a.name -b.name,
		  render: text => <a>{text}</a>
		},
		{
		  title: 'Age',
		  dataIndex: 'age',
		  key: 'age',
		  sorter: (a,b) => a.age -b.age
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
			sorter: (a,b) => a.address -b.address
		  },
	
		{
		  title: 'Tags',
		  key: 'tags',
		  dataIndex: 'tags',
		  sorter: (a,b) => a.address -b.address,
		  render: tags => (
			<>
			  {tags.map(tag => {
				let color = tag.length > 5 ? 'red' : 'green';
				if (tag === 'user') {
				  color = 'volcano';
				}
				return (
				  <Tag color={color} key={tag}>
					{tag.toUpperCase()}
				  </Tag>
				);
			  })}
			</>
		  ),
		},
		{
		  title: 'Action',
		  key: 'action',
      dataIndex: 'action',
	  sorter: (a,b) => a.action -b.action,
      render: () => (
        <>
      <Button size= "small" type="danger">
        Attivo
      </Button>
	  
      </>		
		  ),
		},
		{
			title:'',
			key:'',
			dataIndex:'',
		render: () => (
			<>
			<Button size= "big" type= "primary">
         <FaCaretRight/>
		 </Button>
			</>
		)
		}
		
	
	  ];
	  
	  const [data, setData] = useState();
	  useEffect(() => {
		  setData(myData)
	  }, []);

	  function onChangeHandler(event) {
		  let text = String(event.target.value).toLowerCase();

		  if (text === "") {
			  setData(myData);
		  } else {
			  const filteredData = myData.filter(
				  (x) => String(x.name).toLowerCase().indexOf(text) > -1
			  );
			  setData(filteredData);
		  }
	  }

	  return (
		<div className="App">
		<Card title="Data Table">
		<Input onChange={onChangeHandler} placeholoder="Search" />
				<Table dataSource={data} columns={columns} />
		
				</Card>
		</div>
	  
	);
};

export default App;