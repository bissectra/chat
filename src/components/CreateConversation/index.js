import { Fragment, useEffect, useState } from "react";
import {
  getUsernamesAsync,
  getUserDataAsync,
  createConvesation,
} from "./apiCalls";
import Checkbox from "../Checkbox";
import Menu from "../Menu";

const CreateConversation = () => {
  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState({});
  const [groupName, setGroupName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsernamesAsync(setUsernames);
  }, []);

  useEffect(() => {
    getUserDataAsync(setUserData);
  }, []);

  const handleChange = (id) => {
    // toggle select user for this id
    setUsernames(
      usernames.map((user) => {
        if (user._id !== id) return user;
        return { ...user, selected: !user.selected };
      })
    );
  };

  const handleGroupNameOnChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userIds = usernames
      .filter((user) => user.selected)
      .map((user) => user._id);
    createConvesation(userIds, groupName);
  };
  
  const editSearchItem = (event) => {
    console.log(usernames)
    setSearch(event.target.value)
  }

  const dynamicSearch = () => {
    return usernames.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
  }

  const others = dynamicSearch().filter((user) => {
    return user.username !== userData.username;
  });

  let items = [
    {
      name: "Go To Chat",
      action: () => {
        window.location = "/";
      },
    },
  ];

  return (
    <div style={styles.mainContainer}>
      <Fragment>
        <Menu items={items} bgColor="red" />
        <h1>Add participants to the group</h1>
        <div style={styles.searchContainer}>
          <input style={styles.inputSearch} type="text" placeholder="Search for user" value={search} onChange={editSearchItem} />
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.usersContainer}>
            {others.map((user, index) => {
              return (
                <label key={index} style={styles.checkbox}>
                  <Checkbox
                    label={user.username}
                    value={user.selected}
                    onChange={() => handleChange(user._id)}
                  />
                </label>
              );
            })}
          </div>
          <input
            type="text"
            placeholder="Group Name"
            onChange={handleGroupNameOnChange}
            value={groupName}
            style={styles.inputGroupName}
          />
          <input type="submit" value="Create Group" />
        </form>
      </Fragment>
    </div>
  );
};

export default CreateConversation;

const styles ={
  mainContainer: {
    height: '100vh',
    padding: 20,
    backgroundColor: 'maroon',
    color: 'white'
  },
  usersContainer: {
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
    width: '100%',
    borderRadius: 10
  },
  checkbox: {
    minWidth: 200,
    textAlign: 'center'
  },
  inputGroupName: {
    marginBottom: 10
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  inputSearch: {
    width: '20%',
    minWidth: 100
  }
}
