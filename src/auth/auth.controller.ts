import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/loginDTO';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDTO: SignUpDTO): Promise<{ token: string }> {
    return this.authService.signUp(signUpDTO);
  }

  @Get('/login')
  login(@Body() loginDTO: LoginDTO): Promise<{ token: string }> {
    return this.authService.login(loginDTO);
  }
}
