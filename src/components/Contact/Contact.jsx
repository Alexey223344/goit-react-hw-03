import styles from "./Contact.module.css";

const Contact = ({ user, handleClickUSerDelete }) => {
  return (
    <>
      <div>
        <p className={styles.contactText}>{user.name}</p>
        <p className={styles.contactText}>{user.number}</p>
      </div>
      <button
        type="button"
        className={styles.btncon}
        onClick={() => handleClickUSerDelete(user.id)}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
