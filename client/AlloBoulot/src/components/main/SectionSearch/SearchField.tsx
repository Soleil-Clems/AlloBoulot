import JobSearch, { type SearchInput } from "./JobSearch";

const SearchField = () => {
  // somewhere in your page/component
  const categories = [
    { id: "1", name: "Informatique" },
    { id: "2", name: "Sécurité" },
    { id: "3", name: "Marketing" },
  ];

  function onSearch(values: SearchInput) {
    // Call your API / update URL params / trigger a query, etc.
    // values.title is lowercase & trimmed; values.categoryId may be undefined
    console.log(values);
  }

  return (
    <>
      <JobSearch categories={categories} onSearch={onSearch} />
    </>
  );
};

export default SearchField;
