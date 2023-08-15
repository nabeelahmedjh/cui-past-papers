from django.contrib import admin
from .models import Contributor, Submission, PastPapar
# Register your models here.
admin.site.register(Contributor)
admin.site.register(Submission)
admin.site.register(PastPapar)