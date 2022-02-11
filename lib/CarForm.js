export default function CarForm() {
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const form = new FormData(event.target);
      const formData = Object.fromEntries(form.entries());

      console.log(formData)
  
      const res = await fetch('/api/cars', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
  
      const result = await res.json();
      console.log(result)
    };
  
    return (
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"500px"}}>
        <input name="make" type="text" placeholder="make" style={{height:"30px", marginBottom:"10px"}} />
        <input name="model" type="text" placeholder="model" style={{height:"30px", marginBottom:"10px"}} />
        <input name="image" type="text" placeholder="image" style={{height:"30px", marginBottom:"10px"}} />
        <textarea name="description" type="text" placeholder="description" style={{height:"30px", marginBottom:"10px"}} />
        <button type="submit">Create Car</button>
      </form>
    );
  }