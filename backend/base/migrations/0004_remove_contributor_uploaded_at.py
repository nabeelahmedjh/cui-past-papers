# Generated by Django 4.2.4 on 2023-08-15 15:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_pastpapar_submitted_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contributor',
            name='uploaded_at',
        ),
    ]