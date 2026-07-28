import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import '../../../../core/constants/app_colors.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Teacher Dashboard', style: TextStyle(fontWeight: FontWeight.bold)),
        actions: [
          IconButton(
            icon: const Icon(LucideIcons.user),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Card(
              child: Padding(
                padding: EdgeInsets.all(20),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('July 27, 2026', style: TextStyle(fontWeight: FontWeight.w500)),
                        Text('09:42 AM', style: TextStyle(color: AppColors.textSecondary)),
                      ],
                    ),
                    Divider(height: 32),
                    Row(
                      children: [
                        Expanded(
                          child: _AttendanceAction(
                            label: 'Check In',
                            time: '--:--',
                            icon: LucideIcons.logIn,
                            color: AppColors.primary,
                          ),
                        ),
                        SizedBox(width: 12),
                        Expanded(
                          child: _AttendanceAction(
                            label: 'Check Out',
                            time: '--:--',
                            icon: LucideIcons.logOut,
                            color: AppColors.textSecondary,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 32),
            const Text(
              'Quick Actions',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            _QuickActionTile(
              label: 'Take Student Attendance',
              subtitle: 'Mark attendance for your classes',
              icon: LucideIcons.users,
              color: AppColors.secondary,
              onTap: () {},
            ),
            _QuickActionTile(
              label: 'Attendance History',
              subtitle: 'View your previous records',
              icon: LucideIcons.history,
              color: Colors.orange,
              onTap: () {},
            ),
            _QuickActionTile(
              label: 'Generate Reports',
              subtitle: 'Monthly and weekly summaries',
              icon: LucideIcons.fileText,
              color: Colors.indigo,
              onTap: () {},
            ),
          ],
        ),
      ),
    );
  }
}

class _AttendanceAction extends StatelessWidget {
  final String label;
  final String time;
  final IconData icon;
  final Color color;

  const _AttendanceAction({
    required this.label,
    required this.time,
    required this.icon,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          height: 56,
          width: 56,
          decoration: BoxDecoration(
            color: color.withOpacity(0.1),
            shape: BoxShape.circle,
          ),
          child: Icon(icon, color: color),
        ),
        const SizedBox(height: 12),
        Text(label, style: const TextStyle(fontWeight: FontWeight.w600)),
        Text(time, style: const TextStyle(fontSize: 12, color: AppColors.textSecondary)),
      ],
    );
  }
}

class _QuickActionTile extends StatelessWidget {
  final String label;
  final String subtitle;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  const _QuickActionTile({
    required this.label,
    required this.subtitle,
    required this.icon,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: ListTile(
        contentPadding: const EdgeInsets.all(16),
        leading: Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: color.withOpacity(0.1),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Icon(icon, color: color),
        ),
        title: Text(label, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(subtitle, style: const TextStyle(fontSize: 12)),
        trailing: const Icon(LucideIcons.chevronRight, size: 20, color: AppColors.textSecondary),
        onTap: onTap,
      ),
    );
  }
}
