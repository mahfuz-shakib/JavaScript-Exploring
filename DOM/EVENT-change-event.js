// const input = document.querySelector('input[name=name]');
// input.addEventListener('change',function(e){
//     // console.log(e)
//     // console.log(e.type)
//     // console.log(e.target)
//     // console.log(e.target.className)
//     // console.log(e.target.id)
//     console.log(e.target.value)
// })

// -------------------------------------------------------------------------

// const programs = document.querySelectorAll('input[name=program]');
// Array.from(programs).map((program)=>{
//     // console.log(program);
//     program.addEventListener('change',function(e){
//         if(e.target.checked)
//         {
//             // console.log("Checked");
//             // console.log(e);
//             // console.log(e.type);
//             // console.log(e.target);
//             console.log(e.target.value);
//         }
//     })
// })

// -------------------------------------------------------------------------

const departments = document.querySelector("#department");

departments.addEventListener("change", function (e) {
  // console.log("selected");
  // console.log(e);
  // console.log(e.type);
  // console.log(e.target);
  console.log(e.target.value);
});

// ---------------------------------------------------------------------------------------------------
/*
  <!-- ------------------------------------------------------------- -->

    <!-- 
  <label for="name">Name:  
  <input type="text" name="name" class="name-input" id="name-input">
  </label>  
  -->

    <!-- ------------------------------------------------------------------- -->

    <!-- 
   <h2>programming language</h2>
   <label for="program"><input type="checkbox" name="program" id="c" value="c"> C</label>
   <label for="java"><input type="checkbox" name="program" id="java" value="java"> java</label>
   <label for="python"><input type="checkbox" name="program" id="python" value="python"> python</label>
  -->

    <!-- ------------------------------------------------------------------- -->

    <label for="department">Department: </label>
    <select name="department" id="department">
      <option value="cse">CSE</option>
      <option value="eee">EEE</option>
      <option value="swe">SWE</option>
    </select>

    <!-- ------------------------------------------------------------------- -->

    */
