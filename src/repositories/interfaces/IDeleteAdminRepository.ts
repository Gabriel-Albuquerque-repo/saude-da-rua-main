/* eslint-disable no-unused-vars */
import Admin from '../../entities/Admin';

interface IDeleteAdminRepository {
    FindByEmailAsync(email: string): Promise<boolean>;

    deleteAdmin(admin: string): Promise<boolean>;
}

export default IDeleteAdminRepository;
