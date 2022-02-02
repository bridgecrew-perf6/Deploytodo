import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Del } from "../../assets/delete.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Tick } from "../../assets/tick-green.svg";
import { ReactComponent as Revert } from "../../assets/revert.svg";

export default function TodoApp() {
  useEffect(() => {
    setCount(items.length);
  }, []);


  const [items, setItems] = useState([
    { item: "Buy 1 Kg Tomato", id: 1 },
    { item: "Buy 2 Kg Onion", id: 2 },
    { item: "Visit Friends", id: 3 },
    { item: "Clean House", id: 4 },
  ]);


  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [Completed, setCompleted] = useState([]);

  let revert =(id,data)=>{
    let addback ={
      item:data,
      id:id

    }
    let Newitems =Completed.filter((item) => item.id !==id);
    setCompleted(Newitems);
    setItems([...items,addback])
  }
  let deleteInsert =(id) =>{
    let Content = Completed.filter((item) => item.id !== id);
    setCompleted(Content);
  }


  let insertItem = (id,item) =>{
    let addNew = {
        item:item,
        id:id
    } 
    let NewItems = items.filter((item) => item.id !== id);
    setItems(NewItems);
    setCompleted([...Completed,addNew]);
  }


  let DeleteItem = (id) => {
    let NewItems = items.filter((item) => item.id !== id);
    setItems(NewItems);
  };


  let AddItem = (e) => {
    let newItems = {
      item: input,
      id: count + 1,
    };


    e.preventDefault();
   if(input){
    setItems([...items, newItems]);
    setInput("");
    setCount((prev) => prev + 1);
   }
  };

  
  return (
    <div>
      <Spotlight>
        <Header>
          <h2>Todo List</h2>
        </Header>
        <ListHeader>
          <H3>Things To Be Done</H3>
          <Ul>
            {items.map((item) => (
              <Li>
                <LeftContent>
                  <RoundIcon onClick={() => insertItem(item.id,item.item)}/>
                  <ListItems>
                    {item.id}, {item.item}{" "}
                  </ListItems>
                </LeftContent>
                <Del onClick={() => DeleteItem(item.id)} />
              </Li>
            ))}
          </Ul>
        </ListHeader>
        <Form>
          <Plus
            style={{
              position: "absolute",
              right: "35px",
              left: "113px",
              with: "13px",
              top: "17px",
            }}
          />
          <Textfield
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type new task"
          />
          <Button onClick={AddItem}>Add New</Button>
        </Form>
        <ListHeader>
          <H3>Completed</H3>
          <Ul>
            {Completed.map((item)=>(
                <Li>
                <LeftContent className="box">
                    <Tick
                    style={{
                        border: "2px solid #05c592",
                        width: "25px",         
                        padding: "3px",
                        borderRadius: "50%",
                        height: "25px",
                        marginRight: "20px",
                    }}
                    />
                    <ListItems>{item.id}{item.item}</ListItems>
                </LeftContent>
                <RightContent>
                    <Revert onClick={()=>revert(item.id,item.item)} style={{marginRight:"10px"}}/>
                    <Del onClick={()=>deleteInsert(item.id)}/>
                </RightContent>
                </Li>
            ))}
          </Ul>
        </ListHeader>
      </Spotlight>
    </div>
  );
}
const Spotlight = styled.section`
  width: 60%;
  margin: 0 auto;
  border-right: 1px solid #f5f5f5;
  border-left: 1px solid #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 20px;
  font-size: 30px;
`;

const ListHeader = styled.div`
  font-size: 25px;
  color: #040241;
  padding: 5px 78px;
`;

const H3 = styled.h3``;

const Ul = styled.ul``;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 80%;
  color: #000;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  &.box {
    color: #05c592;
  }
`;

const RoundIcon = styled.span`
  width: 20px;
  border: 1px solid #040241;
  padding: 10px 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 20px;
`;

const ListItems = styled.span``;
const Form = styled.form`
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 80%;
`;

const Textfield = styled.input`
  padding: 8px 30px;
  width: 50%;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 15px 31px;
  background-color: #040241;
  color: #fff;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;
  right: 3px;
  bottom: 1px;
`;
const RightContent = styled.div`
justify-content: space-between;`

