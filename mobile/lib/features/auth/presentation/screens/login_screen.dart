import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import '../../../../core/constants/app_colors.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 60),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: AppColors.primary,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: const Icon(LucideIcons.logIn, color: Colors.white, size: 32),
              ),
              const SizedBox(height: 32),
              const Text(
                'Welcome Back',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Sign in to your teacher account',
                style: TextStyle(
                  fontSize: 16,
                  color: AppColors.textSecondary,
                ),
              ),
              const SizedBox(height: 48),
              const Text(
                'Email Address',
                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
              ),
              const SizedBox(height: 8),
              TextField(
                controller: _emailController,
                decoration: const InputDecoration(
                  hintText: 'teacher@school.com',
                ),
              ),
              const SizedBox(height: 24),
              const Text(
                'Password',
                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
              ),
              const SizedBox(height: 8),
              TextField(
                controller: _passwordController,
                obscureText: true,
                decoration: const InputDecoration(
                  hintText: '••••••••',
                ),
              ),
              const SizedBox(height: 40),
              ElevatedButton(
                onPressed: () {
                  // TODO: Implement Login BLoC call
                },
                child: const Text('Sign In'),
              ),
              const SizedBox(height: 24),
              Center(
                child: TextButton(
                  onPressed: () {},
                  child: const Text(
                    'Forgot Password?',
                    style: TextStyle(
                      color: AppColors.primary,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
