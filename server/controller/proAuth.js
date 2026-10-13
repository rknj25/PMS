import products from '../models/products.js';

export const addpro=async(req,res)=>{
    try{
        const {name,price,description}=req.body;
        const image=req.file.filename;
        const Pro=await products.create({
            name,
            price,
            description,
            image
        })
        return res.json({ message: "Product Added Successfully", Pro });
    }
    catch{
        return res.json({message:"Error in product adding"})
    }
}

export const getpro=async(req,res)=>{
    try{
        const allPro=await products.find();
        return res.json({message:"Product Fetched",
            allPro
        })
    }
    catch{
        return res.json({message:"Error in Product Fetching.."});
    }
}

export const deletePro=async(req,res)=>{
    try{
        const {id}=req.params;
        await products.findByIdAndDelete(id);
        return res.json({message:"Product Deleted"});
    }
    catch{
        return res.json({message:"Error in Delete"})
    }
}

export const updatePro=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,price,description}=req.body;
        await products.findByIdAndUpdate(id,{
            name,
            price,
            description
        })
        return res.json({message:"Product Updated"})
    }
    catch{
        return res.json({message:"Error in Update"})
    }
}
export const getSinglePro = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await products.findById(id);

    if (!product) {
      return res.status(404).json({
        message: 'Product Not Found'
      });
    }

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({
      message: 'Error Fetching Product',
      error: error.message
    });
  }
};