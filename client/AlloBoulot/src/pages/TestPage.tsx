import CompanyForm from "@/components/form/CompanyForm"
import { Button } from "@/components/ui/button"

import { Link } from "react-router"

const TestPage = () => {
  function handleSave() {
    console.log("Form submitted")
  }
  return (
    <>
        <CompanyForm 
          title="Création de la compagnie"
          initialValues={{
            name: "",
            address: "",
            text: "",
          }}
          submitLabel="Enregistrer"
          cancelTo={`/`}
          onSubmit={handleSave} />
          
        <Button asChild className="bg-black m-10">
        <Link to={'/company/10/employees'}>Compagnie 10</Link>
        </Button>
        <Button asChild className="bg-black m-10">
        <Link to={'/company/11/employees'}>Compagnie 11</Link>
        </Button>
    </>
  )
}

export default TestPage
