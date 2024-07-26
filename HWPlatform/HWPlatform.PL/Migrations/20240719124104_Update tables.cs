using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HWPlatform.PL.Migrations
{
    /// <inheritdoc />
    public partial class Updatetables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_HomeworkSubmissions_SubmissionId",
                table: "Grades");

            migrationBuilder.DropForeignKey(
                name: "FK_HomeworkSubmissions_StudentDetails_StudentId",
                table: "HomeworkSubmissions");

            migrationBuilder.DropIndex(
                name: "IX_HomeworkSubmissions_StudentId",
                table: "HomeworkSubmissions");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "HomeworkSubmissions");

            migrationBuilder.RenameColumn(
                name: "SubmissionId",
                table: "Grades",
                newName: "AssignmentStudentId");

            migrationBuilder.RenameIndex(
                name: "IX_Grades_SubmissionId",
                table: "Grades",
                newName: "IX_Grades_AssignmentStudentId");

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "AssignmentStudents",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AssignmentStudents_StudentId",
                table: "AssignmentStudents",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_AssignmentStudents_StudentDetails_StudentId",
                table: "AssignmentStudents",
                column: "StudentId",
                principalTable: "StudentDetails",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_AssignmentStudents_AssignmentStudentId",
                table: "Grades",
                column: "AssignmentStudentId",
                principalTable: "AssignmentStudents",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssignmentStudents_StudentDetails_StudentId",
                table: "AssignmentStudents");

            migrationBuilder.DropForeignKey(
                name: "FK_Grades_AssignmentStudents_AssignmentStudentId",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_AssignmentStudents_StudentId",
                table: "AssignmentStudents");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "AssignmentStudents");

            migrationBuilder.RenameColumn(
                name: "AssignmentStudentId",
                table: "Grades",
                newName: "SubmissionId");

            migrationBuilder.RenameIndex(
                name: "IX_Grades_AssignmentStudentId",
                table: "Grades",
                newName: "IX_Grades_SubmissionId");

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "HomeworkSubmissions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_HomeworkSubmissions_StudentId",
                table: "HomeworkSubmissions",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_HomeworkSubmissions_SubmissionId",
                table: "Grades",
                column: "SubmissionId",
                principalTable: "HomeworkSubmissions",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HomeworkSubmissions_StudentDetails_StudentId",
                table: "HomeworkSubmissions",
                column: "StudentId",
                principalTable: "StudentDetails",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
