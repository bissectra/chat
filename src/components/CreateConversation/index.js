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
    setSearch(event.target.value);
  };

  const dynamicSearch = () => {
    return usernames.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
  };

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
        <Menu items={items} />
        <h1>Add participants to the group</h1>
        <div style={styles.searchContainer}>
          <input
            style={styles.inputSearch}
            type="text"
            placeholder="Search for user"
            value={search}
            onChange={editSearchItem}
          />
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
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
          <br />
          <input type="submit" value="Create Group" />
        </form>
      </Fragment>
    </div>
  );
};

export default CreateConversation;

const styles = {
  form: {
    textAlign: "center",
  },
  mainContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "var(--primaryColorLight)",
    color: "var(--textColorLightVariant)",
  },
  usersContainer: {
    backgroundColor: "var(--primaryColorVariant)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
    width: "80vw",
    borderRadius: 10,
  },
  checkbox: {
    minWidth: 200,
    textAlign: "center",
  },
  inputGroupName: {
    marginBottom: 10,
    width: "20%",
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  inputSearch: {
    width: "20%",
    minWidth: 100,
  },
};
