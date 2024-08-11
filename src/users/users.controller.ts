import { Body, Controller, Post, Get, Patch, Param, Query, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService} from './users.service';

@ApiTags('auth')
@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup')
    @ApiOperation({ summary: "Create a new user" })
    @ApiResponse({ status: 201, description: "Created a new user successfully"})
    @ApiResponse({ status: 403, description: "Forbidden"})
    @ApiBody({type: CreateUserDto })
    createUser(@Body() body: CreateUserDto) {
        this.usersService.create(body.email, body.password);
    }    

    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.usersService.findOne(parseInt(id));
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.usersService.remove(parseInt(id));
    }
}
