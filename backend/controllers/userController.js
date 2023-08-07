import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js'

// @desc  Auth user & get token
// @route POST /data/users/login
// @acces Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc  Register user
// @route POST /data/users
// @acces Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc  Logout user and clear cookie
// @route POST /data/users/logout
// @acces Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })

  res.status(200).json({ message: 'Logged out successfully' })
})

// @desc  Get user profile
// @route GET /data/users/profile
// @acces Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile')
})

// @desc  Update user profile
// @route PUT /data/users/profile
// @acces Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile')
})

// @desc  Get users
// @route GET /data/users
// @acces Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users')
})

// @desc  Get user by ID
// @route GET /data/users/:id
// @acces Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by id')
})

// @desc  Delete user
// @route DELETE /data/users/:id
// @acces Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user')
})

// @desc  Update user
// @route PUT /data/users/:id
// @acces Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user')
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser
}