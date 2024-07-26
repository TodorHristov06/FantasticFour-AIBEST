﻿// <auto-generated />
using System;
using HWPlatform.DAL.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace HWPlatform.PL.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20240719124104_Update tables")]
    partial class Updatetables
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ClassTeacher", b =>
                {
                    b.Property<int>("TeachersId")
                        .HasColumnType("int");

                    b.Property<string>("ClassesClassName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("ClassesYear")
                        .HasColumnType("int");

                    b.HasKey("TeachersId", "ClassesClassName", "ClassesYear");

                    b.HasIndex("ClassesClassName", "ClassesYear");

                    b.ToTable("ClassTeacher");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.AssignmentStudent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AssignmentId")
                        .HasColumnType("int");

                    b.Property<int>("StudentId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AssignmentId");

                    b.HasIndex("StudentId");

                    b.ToTable("AssignmentStudents");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Class", b =>
                {
                    b.Property<string>("ClassName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.HasKey("ClassName", "Year");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Grade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AssignmentStudentId")
                        .HasColumnType("int");

                    b.Property<string>("Feedback")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Percentage")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AssignmentStudentId")
                        .IsUnique();

                    b.ToTable("Grades");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.HomeworkAssignment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Deadline")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaxPoints")
                        .HasColumnType("int");

                    b.Property<int>("SubjectId")
                        .HasColumnType("int");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("SubjectId");

                    b.HasIndex("TeacherId");

                    b.ToTable("HomeworkAssignments");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.HomeworkSubmission", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AssignmentStudentId")
                        .HasColumnType("int");

                    b.Property<string>("Comment")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FilePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("SubmissionDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("AssignmentStudentId")
                        .IsUnique()
                        .HasFilter("[AssignmentStudentId] IS NOT NULL");

                    b.ToTable("HomeworkSubmissions");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.StudentDetails", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("ClassId1")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("ClassId2")
                        .HasColumnType("int");

                    b.Property<int>("ClassNumber")
                        .HasColumnType("int");

                    b.HasKey("UserId");

                    b.HasIndex("ClassId1", "ClassId2");

                    b.ToTable("StudentDetails");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TeacherId");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Teacher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.UserRoles", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("ClassTeacher", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.Teacher", null)
                        .WithMany()
                        .HasForeignKey("TeachersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HWPlatform.DAL.Models.Class", null)
                        .WithMany()
                        .HasForeignKey("ClassesClassName", "ClassesYear")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.AssignmentStudent", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.HomeworkAssignment", "Assignment")
                        .WithMany("AssignedStudents")
                        .HasForeignKey("AssignmentId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("HWPlatform.DAL.Models.StudentDetails", "Student")
                        .WithMany("AssignedHomeworks")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Assignment");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Grade", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.AssignmentStudent", "AssignmentStudent")
                        .WithOne("Grade")
                        .HasForeignKey("HWPlatform.DAL.Models.Grade", "AssignmentStudentId");

                    b.Navigation("AssignmentStudent");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.HomeworkAssignment", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.Subject", "Subject")
                        .WithMany("Assignments")
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HWPlatform.DAL.Models.Teacher", "Teacher")
                        .WithMany("Assignments")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Subject");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.HomeworkSubmission", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.AssignmentStudent", "AssignedStudent")
                        .WithOne("Submission")
                        .HasForeignKey("HWPlatform.DAL.Models.HomeworkSubmission", "AssignmentStudentId");

                    b.Navigation("AssignedStudent");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.StudentDetails", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.User", "User")
                        .WithOne("Student")
                        .HasForeignKey("HWPlatform.DAL.Models.StudentDetails", "UserId");

                    b.HasOne("HWPlatform.DAL.Models.Class", "Class")
                        .WithMany("Students")
                        .HasForeignKey("ClassId1", "ClassId2")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Class");

                    b.Navigation("User");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Subject", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.Teacher", "Teacher")
                        .WithMany("Subjects")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Teacher", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.User", "User")
                        .WithOne("Teacher")
                        .HasForeignKey("HWPlatform.DAL.Models.Teacher", "UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.User", b =>
                {
                    b.HasOne("HWPlatform.DAL.Models.UserRoles", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.AssignmentStudent", b =>
                {
                    b.Navigation("Grade");

                    b.Navigation("Submission");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Class", b =>
                {
                    b.Navigation("Students");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.HomeworkAssignment", b =>
                {
                    b.Navigation("AssignedStudents");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.StudentDetails", b =>
                {
                    b.Navigation("AssignedHomeworks");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Subject", b =>
                {
                    b.Navigation("Assignments");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.Teacher", b =>
                {
                    b.Navigation("Assignments");

                    b.Navigation("Subjects");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.User", b =>
                {
                    b.Navigation("Student");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("HWPlatform.DAL.Models.UserRoles", b =>
                {
                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
