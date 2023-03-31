const employee = require("./../Model/employee");


exports.home=(req,res)=>{
    res.set('Content-Type', 'text/html');
    const Html = `<p>Use Routes :- 
    <ul>
        <li>
            <dl>
                <dt>/allEmp</dt>
                <dd>Query the collection "employee" and list all the documents</dd>
            </dl>
        </li>
        <li>
            <dl>
                <dt>/empSalMore</dt>
                <dd>Query the collection "employee" and list the employees who are having salary more than 30000</dd>
            </dl>
        </li>            <li>
            <dl>
                <dt>/empExpMore</dt>
                <dd>Query the collection "employee" and list the employees who are having experience more than 2 years.</dd>
            </dl>
        </li>
        <li>
            <dl>
                <dt>/empGraduateExpMore</dt>
                <dd>Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year </dd>
            </dl>
        </li>
        <li>
            <dl>
                <dt>/empUpdateSal</dt>
                <dd>Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000</dd>
            </dl>
        </li>
        <li>
            <dl>
                <dt>/empDeletComp</dt>
                <dd>Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.
                    Delete all the documents from "employee" where last company is Y</dd>
            </dl>
        </li>
    </ul>
</p>`
res.send(Buffer.from(Html));
}



exports.allEmp = async(req,res)=>{
    const emp = await employee.find();
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
}

exports.empSalMore = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {salary:{$gte:30000}};
    // const query ={department: 'Accounts'}

    console.log(query);
    // const emp = await employee.find(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}


exports.empExpMore = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {overallExp:{$gte:2}};
    

    console.log(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}

exports.empLastCompY = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {lastCompany:"Y"};
    

    console.log(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}


exports.empGraduateExpMore = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {overallExp:{$gt:1},yearGrad:{$gt:2015}};
    

    console.log(query);
   try {
    const emp = await employee.find(query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}

exports.empUpdateSal = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {$set:{salary:65000}};
    const condition = {salary:{$gt:70000}}

    console.log(query);
   try {
    const emp = await employee.updateMany(condition,query);
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}


exports.empDeletComp = async(req,res)=>{
    // const query = {"salary":{$gte:"30000"}};
    const query = {lastCompany:"Y"};

    console.log(query);
   try {
    const emp = await employee.deleteMany();
    console.log(emp);
    res.status(200).json({
        status:"success",
        employeeData: emp
    });
   } catch (error) {
    console.log(error);
   }
}
