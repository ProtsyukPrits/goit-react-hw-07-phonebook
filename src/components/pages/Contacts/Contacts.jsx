import ContactList from "components/ContactList"
import Filter from "components/Filter"
import { ContactsContainer, Counter } from "./Contacts.styled"
import { selectContacts, selectError, selectIsLoading } from "redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "redux/operations"

const Contacts = () => {
  const dispatch = useDispatch()

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
    <ContactsContainer>
      <Counter>You have {contacts.length} contacts</Counter>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && <ContactList />}
    </ContactsContainer>
  );
}


export default Contacts