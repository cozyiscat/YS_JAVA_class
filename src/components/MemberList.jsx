import './MemberList.css';
import { useState } from 'react';
export function MemberList(){
    const [users, setUsers] = useState(
        [
            {id:1, name:'홍길동', age:34, job:'무직'},
            {id:2, name:'이순신', age:70, job:'군인'},
            {id:3, name:'세종대왕', age:44, job:'정치인'},
        ]
    );
    // 텍스트값용 변수
    const [name, setName] = useState('');
    const changeName= (e)=> {setName(e.target.value);}

    const [age, setAge] = useState('');
    const changeAge= (e)=> {setAge(e.target.value);}
    
    const [job, setJob] = useState('');
    const changeJob= (e)=> {setJob(e.target.value);}

    const addUser = (e) => {
        e.preventDefault();
         // 새로운 ID 생성
        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
        const newUser = {id:newId, name:name, age:Number(age), job:job};
        // alert(newUser);
        setUsers([...users,newUser]);
        setName('');
        setAge('');
        setJob('');
    }
    const deleteUser = (_id) =>{
        const updateUsers = users.filter(user=> user.id !== _id);
        setUsers(updateUsers);
    }
  return (
  <>
  <div className="input-container">
    <form id="userForm" onSubmit={addUser}>
      <table >
        <tr>
          <td>이름</td>
          <td><input type="text" placeholder="이름" id="nameInput" value={name} onChange={changeName}/></td>
          <td rowspan="3"><button type='submit' id="addBtn">추가</button></td>
        </tr>
        <tr>
          <td>나이</td>
          <td><input type="text" placeholder="나이" id="ageInput" value={age} onChange={changeAge}/></td>
        </tr>
        <tr>
          <td>직업</td>
          <td><input  type="text" placeholder="직업" id="jobInput" value={job} onChange={changeJob}/></td>
        </tr>
      </table>
    </form>
  </div>
  <div className="list-container">
    <ul id="userList">
        {
            users.map(
                (user)=>(
                    <li key={user.id}>{user.name}({user.age}세) {user.job} 
                    <button className="delBtn" onClick={()=>deleteUser(user.id)}>삭제</button></li>
                )
            )
        }
      {/* <li>홍길동(34세) 무직 <button class="delBtn">삭제</button></li>
      <li>이순신(54세) 군인 <button class="delBtn">삭제</button></li> */}
    </ul>
  </div>
  </>
  );
}