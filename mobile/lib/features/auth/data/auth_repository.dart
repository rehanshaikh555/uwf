import 'package:dio/dio.dart';
import '../../../core/api/api_client.dart';

class AuthRepository {
  final ApiClient apiClient;

  AuthRepository(this.apiClient);

  async Future<Map<String, dynamic>> login(String email, String password) async {
    try {
      final response = await apiClient.dio.post('/auth/login', data: {
        'email': email,
        'password': password,
      });
      return response.data;
    } on DioException catch (e) {
      throw e.response?.data['message'] ?? 'Login failed';
    }
  }

  Future<void> saveToken(String token) async {
    await apiClient.storage.write(key: 'token', value: token);
  }

  Future<void> logout() async {
    await apiClient.storage.delete(key: 'token');
  }
}
