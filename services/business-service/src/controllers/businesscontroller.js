const Business=require('../models/business');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


const RegisterBusiness = async (req, res) => {
  console.log(req.body);

    try {

        const {
            name,
            slug,
            email,
            password,
            location,
            googleLink
        } = req.body;

        // CHECK ALL FIELDS
        if (
            !name ||
            !slug ||
            !email ||
            !password ||
            !location ||
            !googleLink
        ) {

            return res.status(400).json({
                status: false,
                message: "Give full information"
            });
        }

        // CHECK EXISTING BUSINESS
        const existingBusiness = await Business.findOne({
            $or: [{ slug }, { email }]
        });

        if (existingBusiness) {

            return res.status(400).json({
                status: false,
                message: "Business already exists"
            });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE BUSINESS
        const business = await Business.create({
            name,
            slug,
            email,
            password: hashedPassword,
            location,
            googleLink
        });

        // GENERATE JWT TOKEN
        const token = jwt.sign(
            {
                id: business._id,
                email: business.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(201).json({
            status: true,
            message: "Business registered successfully",
            token
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: error.message
        });
    }
} 


const UpdateBusiness=async (req,res)=>{
 try {
       const{name,slug,location,googleLink,email}=req.body;
    const existingBusiness=await Business.findOne({slug});
    if(!existingBusiness){
        return res.status(400).json({
      status:false,
      message:"Business not exists"
   })
    }
    const updateBusiness=await Business.findOneAndUpdate(
        {slug},
        {name,email,location,googleLink},
        {new:true}

    )

     return res.status(200).json({
      status: true,
      message: "Business updated successfully",
      data: updateBusiness
    });
    
 } catch (error) {
      res.status(500).json({
        status:false,
        message:error.message,
    })

    
 }
}



const loginBusiness = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide both email and password"
      });
    }

    // Find business by email
    const existingBusiness = await Business.findOne({ email });
    if (!existingBusiness) {
      return res.status(400).json({
        status: false,
        message: "Business not found"
      });
    }

    // Compare password
    const pass = existingBusiness.password;
    const check = await bcrypt.compare(password, pass);

    if (!check) {
      return res.status(400).json({
        status: false,
        message: "Wrong password"
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: existingBusiness._id,
        email: existingBusiness.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      status: true,
      message: "Business logged in successfully",
      token
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

const getfeature=async(req,res)=>{
  try {
    const{slug}=req.params;
    const information=await Business.findOne({slug});

    if(!information){
       return res.status(404).json({
        status: false,
        message: "Business not registered"
      });

    }
    res.status(200).json({
      sucess:true,
      information:information
    })
    
  } catch (error) {

      return res.status(500).json({
        status: false,
        message:error.message
      });


    
  }
  
}

module.exports={
    RegisterBusiness,
    UpdateBusiness,
    loginBusiness,
    getfeature,
}