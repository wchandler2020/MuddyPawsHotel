﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MuddyPawsApi.Models;

namespace MuddyPawsApi.Migrations
{
    [DbContext(typeof(MuddyPawsDBContext))]
    partial class MuddyPawsDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MuddyPawsApi.Models.MuddyPawsEmployee", b =>
                {
                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("EmployeeEmail")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EmployeeName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EmployeePhone")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EmployeeRole")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("EmployeeId");

                    b.ToTable("muddyPawsEmployee");
                });

            modelBuilder.Entity("MuddyPawsApi.Models.MuddyPawsPets", b =>
                {
                    b.Property<int>("PetID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CheckinDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("CheckoutDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Number")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OwnersName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PetName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Size")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SpecialNeeds")
                        .HasColumnType("nvarchar(1000)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("StreetAddress")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ZipCode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PetID");

                    b.ToTable("muddyPawsPet");
                });
#pragma warning restore 612, 618
        }
    }
}
