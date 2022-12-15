import { Router } from 'express'
import { login, register } from './user.controller.js'

const router = Router()

/**
 * POST /api/auth/login
 * @summary Login
 * @tags Auth
 * @param { User } request.body.required - User
 * @return { object } 200 - succes response
 */
router.post('/login', login)

/**
 * POST /api/auth/register
 * @summary Register
 * @tags Auth
 * @param { User } request.body.required - User
 * @return { object } 201 - success response
 */
router.post('/register', register)

export {
    router as routerAuth
}