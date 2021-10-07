import userData from "../../../../core/infra/data/users.data";

export default class UserRepository {
    getAll() {
        return userData;
    }

    getOne(id: number) {
        userData.find(user => user.id === id)
    }

    save(user: any) {
        user.id = userData.length;

        userData.push(user);
        
        return user;
    }
}